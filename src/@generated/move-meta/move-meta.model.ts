import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { move_meta_ailments } from '../move-meta-ailments/move-meta-ailments.model';
import { move_meta_categories } from '../move-meta-categories/move-meta-categories.model';
import { moves } from '../moves/moves.model';

@ObjectType()
export class move_meta {

    @Field(() => ID, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    meta_category_id!: number;

    @Field(() => Int, {nullable:false})
    meta_ailment_id!: number;

    @Field(() => Int, {nullable:true})
    min_hits!: number | null;

    @Field(() => Int, {nullable:true})
    max_hits!: number | null;

    @Field(() => Int, {nullable:true})
    min_turns!: number | null;

    @Field(() => Int, {nullable:true})
    max_turns!: number | null;

    @Field(() => Int, {nullable:false})
    recoil!: number;

    @Field(() => Int, {nullable:false})
    healing!: number;

    @Field(() => Int, {nullable:false})
    crit_rate!: number;

    @Field(() => Int, {nullable:false})
    ailment_chance!: number;

    @Field(() => Int, {nullable:false})
    flinch_chance!: number;

    @Field(() => Int, {nullable:false})
    stat_chance!: number;

    @Field(() => move_meta_ailments, {nullable:false})
    move_meta_ailments?: move_meta_ailments;

    @Field(() => move_meta_categories, {nullable:false})
    move_meta_categories?: move_meta_categories;

    @Field(() => moves, {nullable:false})
    moves?: moves;
}
