import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { Move_meta_ailmentsRelationFilter } from '../prisma/move-meta-ailments-relation-filter.input';
import { Move_meta_categoriesRelationFilter } from '../prisma/move-meta-categories-relation-filter.input';
import { MovesRelationFilter } from '../prisma/moves-relation-filter.input';

@InputType()
export class move_metaWhereInput {

    @Field(() => [move_metaWhereInput], {nullable:true})
    AND?: Array<move_metaWhereInput>;

    @Field(() => [move_metaWhereInput], {nullable:true})
    OR?: Array<move_metaWhereInput>;

    @Field(() => [move_metaWhereInput], {nullable:true})
    NOT?: Array<move_metaWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    meta_category_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    meta_ailment_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    min_hits?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    max_hits?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    min_turns?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    max_turns?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    recoil?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    healing?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    crit_rate?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    ailment_chance?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    flinch_chance?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    stat_chance?: IntFilter;

    @Field(() => Move_meta_ailmentsRelationFilter, {nullable:true})
    move_meta_ailments?: Move_meta_ailmentsRelationFilter;

    @Field(() => Move_meta_categoriesRelationFilter, {nullable:true})
    move_meta_categories?: Move_meta_categoriesRelationFilter;

    @Field(() => MovesRelationFilter, {nullable:true})
    moves?: MovesRelationFilter;
}
