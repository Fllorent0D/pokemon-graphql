import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { generationsOrderByWithRelationInput } from '../generations/generations-order-by-with-relation.input';
import { locationsOrderByWithRelationInput } from '../locations/locations-order-by-with-relation.input';

@InputType()
export class location_game_indicesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    location_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_index?: keyof typeof SortOrder;

    @Field(() => generationsOrderByWithRelationInput, {nullable:true})
    generations?: generationsOrderByWithRelationInput;

    @Field(() => locationsOrderByWithRelationInput, {nullable:true})
    locations?: locationsOrderByWithRelationInput;
}
