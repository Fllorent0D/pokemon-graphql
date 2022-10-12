import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { location_areasOrderByWithRelationInput } from '../location-areas/location-areas-order-by-with-relation.input';

@InputType()
export class location_area_proseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    location_area_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => location_areasOrderByWithRelationInput, {nullable:true})
    location_areas?: location_areasOrderByWithRelationInput;
}
