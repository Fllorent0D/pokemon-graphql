import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { contest_typesOrderByWithRelationInput } from '../contest-types/contest-types-order-by-with-relation.input';
import { berriesOrderByWithRelationInput } from '../berries/berries-order-by-with-relation.input';

@InputType()
export class berry_flavorsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    berry_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contest_type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flavor?: keyof typeof SortOrder;

    @Field(() => contest_typesOrderByWithRelationInput, {nullable:true})
    contest_types?: contest_typesOrderByWithRelationInput;

    @Field(() => berriesOrderByWithRelationInput, {nullable:true})
    berries?: berriesOrderByWithRelationInput;
}
