import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { move_effectsOrderByWithRelationInput } from '../move-effects/move-effects-order-by-with-relation.input';

@InputType()
export class move_effect_proseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    move_effect_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    short_effect?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => move_effectsOrderByWithRelationInput, {nullable:true})
    move_effects?: move_effectsOrderByWithRelationInput;
}
