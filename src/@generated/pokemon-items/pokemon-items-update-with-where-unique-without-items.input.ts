import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_itemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_itemsUpdateWithoutItemsInput } from './pokemon-items-update-without-items.input';

@InputType()
export class pokemon_itemsUpdateWithWhereUniqueWithoutItemsInput {

    @Field(() => pokemon_itemsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_itemsWhereUniqueInput)
    where!: pokemon_itemsWhereUniqueInput;

    @Field(() => pokemon_itemsUpdateWithoutItemsInput, {nullable:false})
    @Type(() => pokemon_itemsUpdateWithoutItemsInput)
    data!: pokemon_itemsUpdateWithoutItemsInput;
}
