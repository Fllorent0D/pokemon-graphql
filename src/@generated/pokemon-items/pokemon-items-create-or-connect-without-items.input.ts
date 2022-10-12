import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_itemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_itemsCreateWithoutItemsInput } from './pokemon-items-create-without-items.input';

@InputType()
export class pokemon_itemsCreateOrConnectWithoutItemsInput {

    @Field(() => pokemon_itemsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_itemsWhereUniqueInput)
    where!: pokemon_itemsWhereUniqueInput;

    @Field(() => pokemon_itemsCreateWithoutItemsInput, {nullable:false})
    @Type(() => pokemon_itemsCreateWithoutItemsInput)
    create!: pokemon_itemsCreateWithoutItemsInput;
}
