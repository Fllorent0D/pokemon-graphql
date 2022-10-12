import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { MovesRelationFilter } from '../prisma/moves-relation-filter.input';
import { ItemsRelationFilter } from '../prisma/items-relation-filter.input';
import { Version_groupsRelationFilter } from '../prisma/version-groups-relation-filter.input';

@InputType()
export class machinesWhereInput {

    @Field(() => [machinesWhereInput], {nullable:true})
    AND?: Array<machinesWhereInput>;

    @Field(() => [machinesWhereInput], {nullable:true})
    OR?: Array<machinesWhereInput>;

    @Field(() => [machinesWhereInput], {nullable:true})
    NOT?: Array<machinesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    machine_number?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    item_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    move_id?: IntFilter;

    @Field(() => MovesRelationFilter, {nullable:true})
    moves?: MovesRelationFilter;

    @Field(() => ItemsRelationFilter, {nullable:true})
    items?: ItemsRelationFilter;

    @Field(() => Version_groupsRelationFilter, {nullable:true})
    version_groups?: Version_groupsRelationFilter;
}
