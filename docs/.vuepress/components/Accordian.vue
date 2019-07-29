<template lang="html">
  <div>

  
  <vs-button 
  v-for="base in baselines"
   v-if="base.path === path"
   :name="base.name"
   :route="base.route"
   target :href="{url: base.github}">
  Github
  </vs-button>

  <vs-button 
  v-for="base in baselines"
   v-if="base.path === path && base.chef_hardening !==undefined"
   :name="base.name"
   :route="base.route"
   target :href="{url: base.chef_hardening}">
    Chef Remediation Cookbook
  </vs-button>

   <vs-button 
  v-for="base in baselines"
   v-if="base.path === path && base.readme !==undefined"
   :name="base.name"
   :route="base.route"
   target :href="{url: base.readme}">
    README
  </vs-button>

   <vs-table
     max-items="10"
     pagination
     search 
     :data="controls">
    <template slot="header">
      <h3>{{profile.name}}</h3>

</template>
      <template slot="thead">

  <vs-th id="a">Title</vs-th>
  <vs-th id="b" sort-key="impact">Impact</vs-th>
</template>

      <template slot-scope="{data}">
  <vs-tr id="c" :key="indextr" v-for="(tr, indextr) in data">
    <vs-td id="b" :data="data[indextr].title">{{data[indextr].title}}</vs-td>

    <vs-td id="a" :data="data[indextr].impact">{{data[indextr].impact}}</vs-td>
    <template class="expand-user" slot="expand">
      <vs-list>
        <vs-tr id="a">{{data[indextr].desc}}</vs-tr>

        <vs-tr id="d" v-if="data[indextr].tags.nist !==undefined">{{data[indextr].tags.nist}}</vs-tr>
        <vs-tr id="d" v-if="data[indextr].tags.cci !==undefined">{{data[indextr].tags.cci}}</vs-tr>

        <vs-tr
          id="d"
          v-if="data[indextr].tags.severity !==undefined"
        >{{data[indextr].tags.severity}}</vs-tr>
        <vs-tr
          id="d"
          v-if="data[indextr].tags.cis_level !==undefined"
        >{{data[indextr].tags.cis_level}}</vs-tr>
        <vs-td >
          <prism language="ruby">{{data[indextr].code}}</prism>
        </vs-td>
      </vs-list>
    </template>
  </vs-tr>
</template>
 </vs-table>
  </div>
</template>

<script>
import "prismjs";
import Prism from "vue-prism-component";
import "prismjs/components/prism-ruby";
import "prismjs/themes/prism.css";

import nginx_profile from "../assets/nginx-baseline.json";
import redhat6_stig from "../assets/disa-rhel6-stig-baseline.json";
import oracle12c_stig from "../assets/oracle-database-12c-stig-baseline.json";
import rsa_archer6 from "../assets/rsa-archer-security-configuration-guide-baseline.json";
import microsoft_sql_server_2014_database from "../assets/microsoft-sql-2014-database-stig-baseline.json";
import apache_tomcat_8 from "../assets/cis-apache-tomcat-benchmark8.json";
import cis_aws_foundations from "../assets/cis-aws-foundations-baseline.json";
import ubuntu_stig from "../assets/stig-canonical-ubuntu-16.04-lts-baseline.json";
import microsoft_sql_server_2014_instance from "../assets/microsoft-sql-server-2014-instance-stig-baseline.json";
import microsoft_iis_server_stig from "../assets/microsoft-iis-8.5-server-stig-baseline.json";
import microsoft_iis_site_stig from "../assets/microsoft-iis-8.5-site-stig-baseline.json";
import oracle_microsoft_sql_cis from "../assets/Oracle-MySQL-Enterprise-Edition-5.7-cis-baseline.json";
import aws_rds_microsoft_sql_server_2014_stig from "../assets/aws-rds-microsoft-sql-server-2014-stig-baseline";
import cis_docker from "../assets/cis-docker-ce-baseline.json";
import jboss_profile from "../assets/red-hat-jboss-eap-6.3-stig-baseline.json";
import jre8 from "../assets/oracle-java-runtime-environment-8-unix-stig-baseline.json";
import jre7 from "../assets/oracle-java-runtime-environment-7-unix-stig-baseline.json";
import aws_rds_postgres_stig from "../assets/aws-rds-postgres-9-stig-baseline.json";
import microsoft_server_2012r2 from "../assets/microsoft-windows-2012r2-memberserver-stig-baseline.json";
import mongodb_stig from "../assets/mongodb-enterprise-advanced-stig-baseline.json";
import apache_tomcat_7 from "../assets/cis-apache-tomcat-benchmark7.json";
import aws_oracle_microsoft_sql_cis from "../assets/cis-aws-rds-mysql-server-enterprise-v5.7-baseline.json";
import microsoft_server_2016 from "../assets/stig-microsoft-windows-server-2016-v1r4-baseline.json";
import aws_s3 from "../assets/aws-s3-baseline.json";
import cis_kubernetes from "../assets/cis-kubernetes-benchmark.json";
import aws_rds_infrastructure from "../assets/cis-aws-rds-infrastructure-baseline.json"; 
import aws_oracle from "../assets/aws-rds-oracle-mysql-ee-5.7-cis-baseline.json";
import route from "../../db.json"

export default {
  components: {
    Prism
  },
  computed: {
    controls() {

      var title = this.$route.path;
      switch(title) {
      case '/Baselines/nginx-baseline.html':
        return nginx_profile.controls;
        break;
      case 'red-hat-enterprise-linux-6-stig-baseline':
        return redhat6_stig.controls;
        break;
      case 'oracle-database-12c-stig-baseline':
        return oracle12c_stig.controls;
        break;
      case 'rsa-archer-6-security-configuration-guide-baseline':
        return rsa_archer6.controls;
        break;
      case 'microsoft-sql-server-2014-database-stig-baseline':
        return microsoft_sql_server_2014_database.controls;
        break;
      case '/Baselines/cis-apache-tomcat-benchmark-8.html':
        return apache_tomcat_8.controls;
        break;
      case 'cis-aws-foundations-baseline':
        return cis_aws_foundations.controls;
        break;
      case 'stig-canonical-ubuntu-16.04-lts-baseline':
        return ubuntu_stig.controls;
        break;
      case 'microsoft-sql-server-2014-instance-stig-baseline':
        return microsoft_sql_server_2014_instance.controls;
        break;
      case '/Baselines/microsoft-iis-8.5-server-stig-baseline.html':
        return microsoft_iis_server_stig.controls;
        break;
      case '/Baselines/microsoft-iis-8.5-site-stig-baseline.html':
        return microsoft_iis_site_stig.controls;
        break;
      case 'Oracle-MySQL-Enterprise-Edition-5.7-cis-baseline':
        return oracle_microsoft_sql_cis.controls;
        break;
      case 'aws-rds-microsoft-sql-server-2014-stig-baseline':
        return aws_rds_microsoft_sql_server_2014_stig.controls;
        break;
      case 'cis-docker-community-edition-baseline':
        return cis_docker.controls;
        break;
      case 'red-hat-jboss-eap-6.3-stig-baseline':
        return jboss_profile.controls;
        break;
      case 'oracle-java-runtime-environment-8-unix-stig-baseline':
        return jre8.controls;
        break;
      case 'oracle-java-runtime-environment-7-unix-stig-baseline':
        return jre7.controls;
        break;
      case 'aws-rds-postgres-9-stig-baseline':
        return aws_rds_postgres_stig.controls;
        break;
      case 'microsoft-windows-2012r2-memberserver-stig-baseline':
        return microsoft_server_2012r2.controls;
        break;
      case 'mongodb-enterprise-advanced-stig-baseline':
        return mongodb_stig.controls;
        break;
      case 'cis-apache-tomcat-benchmark-7':
        return apache_tomcat_7.controls;
        break;
      case 'cis-aws-rds-mysql-server-enterprise-v5.7-baseline':
        return aws_oracle_microsoft_sql_cis.controls;
        break;
      case 'stig-microsoft-windows-server-2016-v1r4-baseline':
        return microsoft_server_2016.controls;
        break;
      case 'aws-s3-baseline':
        return aws_s3.controls;
        break;
      case 'cis-kubernetes-benchmark':
        return cis_kubernetes.controls;
        break;
      case 'cis-aws-rds-infrastructure-baseline':
        return aws_rds_infrastructure.controls;
        break;
      case 'aws-rds-oracle-mysql-ee-5.7-cis-baseline':
        return aws_oracle.controls;
        return;
      default:
      break;
      }
    },
    profile() {
      
    var title = this.$route.path;
      switch(title) {
      case '/Baselines/nginx-baseline.html':
        return nginx_profile;
        break;
      case 'red-hat-enterprise-linux-6-stig-baseline':
        return redhat6_stig;
        break;
      case 'oracle-database-12c-stig-baseline':
        return oracle12c_stig;
        break;
      case 'rsa-archer-6-security-configuration-guide-baseline':
        return rsa_archer6;
        break;
      case 'microsoft-sql-server-2014-database-stig-baseline':
        return microsoft_sql_server_2014_database;
        break;
      case '/Baselines/cis-apache-tomcat-benchmark-8.html':
        return apache_tomcat_8;
        break;
      case 'cis-aws-foundations-baseline':
        return cis_aws_foundations;
        break;
      case 'stig-canonical-ubuntu-16.04-lts-baseline':
        return ubuntu_stig;
        break;
      case 'microsoft-sql-server-2014-instance-stig-baseline':
        return microsoft_sql_server_2014_instance;
        break;
      case '/Baselines/microsoft-iis-8.5-server-stig-baseline.html':
        return microsoft_iis_server_stig;
        break;
      case '/Baselines/microsoft-iis-8.5-site-stig-baseline.html':
        return microsoft_iis_site_stig;
        break;
      case 'Oracle-MySQL-Enterprise-Edition-5.7-cis-baseline':
        return oracle_microsoft_sql_cis;
        break;
      case 'aws-rds-microsoft-sql-server-2014-stig-baseline':
        return aws_rds_microsoft_sql_server_2014_stig;
        break;
      case 'cis-docker-community-edition-baseline':
        return cis_docker;
        break;
      case 'red-hat-jboss-eap-6.3-stig-baseline':
        return jboss_profile;
        break;
      case 'oracle-java-runtime-environment-8-unix-stig-baseline':
        return jre8;
        break;
      case 'oracle-java-runtime-environment-7-unix-stig-baseline':
        return jre7;
        break;
      case 'aws-rds-postgres-9-stig-baseline':
        return aws_rds_postgres_stig;
        break;
      case 'microsoft-windows-2012r2-memberserver-stig-baseline':
        return microsoft_server_2012r2;
        break;
      case 'mongodb-enterprise-advanced-stig-baseline':
        return mongodb_stig;
        break;
      case 'cis-apache-tomcat-benchmark-7':
        return apache_tomcat_7;
        break;
      case 'cis-aws-rds-mysql-server-enterprise-v5.7-baseline':
        return aws_oracle_microsoft_sql_cis;
        break;
      case 'stig-microsoft-windows-server-2016-v1r4-baseline':
        return microsoft_server_2016;
        break;
      case 'aws-s3-baseline':
        return aws_s3;
        break;
      case 'cis-kubernetes-benchmark':
        return cis_kubernetes;
        break;
      case 'cis-aws-rds-infrastructure-baseline':
        return aws_rds_infrastructure;
        break;
      case 'aws-rds-oracle-mysql-ee-5.7-cis-baseline':
        return aws_oracle;
        return;
      default:
      break;
      }  
    },
    baselines() {
    return route.baselines;
    },
    names() {
    return this.baselines.name;
    },
    showModal() {
      return sharedData.showModal;
    },
    selectedHistoryRow() {
      return sharedData.selectedHistoryRow;
    },
    test(){
    return this.$page.title;
    },
    file(){
    return "../assets/" + this.$page.title + '.json'
    },
    path(){
    return this.$route.path;
    }
  }
};
</script>
<style>
th#a {
  background-color: black;
  color: white;
  width: 550px;
  font-size: 0.8em;
  letter-spacing: 3px;
  font-weight: bold;
}
th#b {
  background-color: black;
  color: white;
  width: 10px;
  font-size: 0.8em;
  letter-spacing: 3px;
  font-weight: bold;
   width: 10px;
}
tr {
  page-break-inside: avoid;
  font-size: 15px;
  line-height: 1.6;
  max-width: 100%;
  overflow: auto;
  display: block;
  word-wrap: break-word;
  text-align: left;
  color: black;
  
}


tr#c {
  background: white;




}

td#b {
  color: black;
  width: 518px;
  background: white;
}
td#c {
  background: #444;
  color: white;
  padding: 1em;
  margin: 1em 0 8px 0;
  border: none;
  font-family: monospace;
}
tr#d {
  display: inline-block;
  background: #444;
  color: white;
  font-size: 0.7em;
  padding: 2px 10px 3px 10px;
  border-radius: 1em;
  margin: 1.5em 0;

}

</style>
