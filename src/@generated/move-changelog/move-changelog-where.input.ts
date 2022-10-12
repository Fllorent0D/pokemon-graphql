import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { Move_effectsRelationFilter } from '../prisma/move-effects-relation-filter.input';
import { TypesRelationFilter } from '../prisma/types-relation-filter.input';
import { Version_groupsRelationFilter } from '../prisma/version-groups-relation-filter.input';
import { MovesRelationFilter } from '../prisma/moves-relation-filter.input';

@InputType()
export class move_changelogWhereInput {

    @Field(() => [move_changelogWhereInput], {nullable:true})
    AND?: Array<move_changelogWhereInput>;

    @Field(() => [move_changelogWhereInput], {nullable:true})
    OR?: Array<move_changelogWhereInput>;

    @Field(() => [move_changelogWhereInput], {nullable:true})
    NOT?: Array<move_changelogWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    changed_in_version_group_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    type_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    effect_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    effect_chance?: IntNullableFilter;

    @Field(() => Move_effectsRelationFilter, {nullable:true})
    move_effects?: Move_effectsRelationFilter;

    @Field(() => TypesRelationFilter, {nullable:true})
    types?: TypesRelationFilter;

    @Field(() => Version_groupsRelationFilter, {nullable:true})
    version_groups?: Version_groupsRelationFilter;

    @Field(() => MovesRelationFilter, {nullable:true})
    moves?: MovesRelationFilter;
}
