import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { versionsOrderByWithRelationInput } from '../versions/versions-order-by-with-relation.input';
import { encounter_methodsOrderByWithRelationInput } from '../encounter-methods/encounter-methods-order-by-with-relation.input';
import { location_areasOrderByWithRelationInput } from '../location-areas/location-areas-order-by-with-relation.input';

@InputType()
export class location_area_encounter_ratesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    location_area_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    encounter_method_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;

    @Field(() => versionsOrderByWithRelationInput, {nullable:true})
    versions?: versionsOrderByWithRelationInput;

    @Field(() => encounter_methodsOrderByWithRelationInput, {nullable:true})
    encounter_methods?: encounter_methodsOrderByWithRelationInput;

    @Field(() => location_areasOrderByWithRelationInput, {nullable:true})
    location_areas?: location_areasOrderByWithRelationInput;
}
