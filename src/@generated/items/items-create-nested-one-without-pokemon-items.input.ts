import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutPokemon_itemsInput } from './items-create-without-pokemon-items.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutPokemon_itemsInput } from './items-create-or-connect-without-pokemon-items.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class itemsCreateNestedOneWithoutPokemon_itemsInput {

    @Field(() => itemsCreateWithoutPokemon_itemsInput, {nullable:true})
    @Type(() => itemsCreateWithoutPokemon_itemsInput)
    create?: itemsCreateWithoutPokemon_itemsInput;

    @Field(() => itemsCreateOrConnectWithoutPokemon_itemsInput, {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutPokemon_itemsInput)
    connectOrCreate?: itemsCreateOrConnectWithoutPokemon_itemsInput;

    @Field(() => itemsWhereUniqueInput, {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: itemsWhereUniqueInput;
}
