import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { move_meta_ailmentsOrderByWithRelationInput } from '../move-meta-ailments/move-meta-ailments-order-by-with-relation.input';

@InputType()
export class move_meta_ailment_namesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    move_meta_ailment_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => move_meta_ailmentsOrderByWithRelationInput, {nullable:true})
    move_meta_ailments?: move_meta_ailmentsOrderByWithRelationInput;
}
