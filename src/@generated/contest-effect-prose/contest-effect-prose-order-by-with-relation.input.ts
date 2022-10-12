import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { contest_effectsOrderByWithRelationInput } from '../contest-effects/contest-effects-order-by-with-relation.input';

@InputType()
export class contest_effect_proseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    contest_effect_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flavor_text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => contest_effectsOrderByWithRelationInput, {nullable:true})
    contest_effects?: contest_effectsOrderByWithRelationInput;
}
