import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutPokemon_itemsInput } from './items-create-without-pokemon-items.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutPokemon_itemsInput } from './items-create-or-connect-without-pokemon-items.input';
import { itemsUpsertWithoutPokemon_itemsInput } from './items-upsert-without-pokemon-items.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { itemsUpdateWithoutPokemon_itemsInput } from './items-update-without-pokemon-items.input';

@InputType()
export class itemsUpdateOneRequiredWithoutPokemon_itemsNestedInput {

    @Field(() => itemsCreateWithoutPokemon_itemsInput, {nullable:true})
    @Type(() => itemsCreateWithoutPokemon_itemsInput)
    create?: itemsCreateWithoutPokemon_itemsInput;

    @Field(() => itemsCreateOrConnectWithoutPokemon_itemsInput, {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutPokemon_itemsInput)
    connectOrCreate?: itemsCreateOrConnectWithoutPokemon_itemsInput;

    @Field(() => itemsUpsertWithoutPokemon_itemsInput, {nullable:true})
    @Type(() => itemsUpsertWithoutPokemon_itemsInput)
    upsert?: itemsUpsertWithoutPokemon_itemsInput;

    @Field(() => itemsWhereUniqueInput, {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: itemsWhereUniqueInput;

    @Field(() => itemsUpdateWithoutPokemon_itemsInput, {nullable:true})
    @Type(() => itemsUpdateWithoutPokemon_itemsInput)
    update?: itemsUpdateWithoutPokemon_itemsInput;
}
