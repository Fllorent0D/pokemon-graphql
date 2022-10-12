import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class movesSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    target_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    damage_class_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect_chance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contest_type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contest_effect_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    super_contest_effect_id?: keyof typeof SortOrder;
}
