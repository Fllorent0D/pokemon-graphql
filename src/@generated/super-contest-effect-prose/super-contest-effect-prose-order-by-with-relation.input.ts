import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { super_contest_effectsOrderByWithRelationInput } from '../super-contest-effects/super-contest-effects-order-by-with-relation.input';

@InputType()
export class super_contest_effect_proseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    super_contest_effect_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flavor_text?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => super_contest_effectsOrderByWithRelationInput, {nullable:true})
    super_contest_effects?: super_contest_effectsOrderByWithRelationInput;
}
