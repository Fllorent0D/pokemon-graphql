import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { typesOrderByWithRelationInput } from '../types/types-order-by-with-relation.input';

@InputType()
export class type_efficacyOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    damage_type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    target_type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    damage_factor?: keyof typeof SortOrder;

    @Field(() => typesOrderByWithRelationInput, {nullable:true})
    types_type_efficacy_target_type_idTotypes?: typesOrderByWithRelationInput;

    @Field(() => typesOrderByWithRelationInput, {nullable:true})
    types_type_efficacy_damage_type_idTotypes?: typesOrderByWithRelationInput;
}
