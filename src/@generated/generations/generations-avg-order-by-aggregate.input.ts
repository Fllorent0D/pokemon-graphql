import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class generationsAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    main_region_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canonical_pokedex_id?: keyof typeof SortOrder;
}
