import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { RegionsRelationFilter } from '../prisma/regions-relation-filter.input';
import { Version_groupsRelationFilter } from '../prisma/version-groups-relation-filter.input';

@InputType()
export class version_group_regionsWhereInput {

    @Field(() => [version_group_regionsWhereInput], {nullable:true})
    AND?: Array<version_group_regionsWhereInput>;

    @Field(() => [version_group_regionsWhereInput], {nullable:true})
    OR?: Array<version_group_regionsWhereInput>;

    @Field(() => [version_group_regionsWhereInput], {nullable:true})
    NOT?: Array<version_group_regionsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    region_id?: IntFilter;

    @Field(() => RegionsRelationFilter, {nullable:true})
    regions?: RegionsRelationFilter;

    @Field(() => Version_groupsRelationFilter, {nullable:true})
    version_groups?: Version_groupsRelationFilter;
}
