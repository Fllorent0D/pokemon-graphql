import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_metaOrderByRelationAggregateInput } from '../move-meta/move-meta-order-by-relation-aggregate.input';
import { move_meta_ailment_namesOrderByRelationAggregateInput } from '../move-meta-ailment-names/move-meta-ailment-names-order-by-relation-aggregate.input';

@InputType()
export class move_meta_ailmentsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => move_metaOrderByRelationAggregateInput, {nullable:true})
    move_meta?: move_metaOrderByRelationAggregateInput;

    @Field(() => move_meta_ailment_namesOrderByRelationAggregateInput, {nullable:true})
    move_meta_ailment_names?: move_meta_ailment_namesOrderByRelationAggregateInput;
}
