import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { move_meta_ailmentsCreateNestedOneWithoutMove_metaInput } from '../move-meta-ailments/move-meta-ailments-create-nested-one-without-move-meta.input';
import { movesCreateNestedOneWithoutMove_metaInput } from '../moves/moves-create-nested-one-without-move-meta.input';

@InputType()
export class move_metaCreateWithoutMove_meta_categoriesInput {

    @Field(() => Int, {nullable:true})
    min_hits?: number;

    @Field(() => Int, {nullable:true})
    max_hits?: number;

    @Field(() => Int, {nullable:true})
    min_turns?: number;

    @Field(() => Int, {nullable:true})
    max_turns?: number;

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

    @Field(() => move_meta_ailmentsCreateNestedOneWithoutMove_metaInput, {nullable:false})
    move_meta_ailments!: move_meta_ailmentsCreateNestedOneWithoutMove_metaInput;

    @Field(() => movesCreateNestedOneWithoutMove_metaInput, {nullable:true})
    moves?: movesCreateNestedOneWithoutMove_metaInput;
}
