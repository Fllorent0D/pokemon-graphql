import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesCreateWithoutPokemon_typesInput } from './types-create-without-pokemon-types.input';
import { Type } from 'class-transformer';
import { typesCreateOrConnectWithoutPokemon_typesInput } from './types-create-or-connect-without-pokemon-types.input';
import { typesUpsertWithoutPokemon_typesInput } from './types-upsert-without-pokemon-types.input';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { typesUpdateWithoutPokemon_typesInput } from './types-update-without-pokemon-types.input';

@InputType()
export class typesUpdateOneRequiredWithoutPokemon_typesNestedInput {

    @Field(() => typesCreateWithoutPokemon_typesInput, {nullable:true})
    @Type(() => typesCreateWithoutPokemon_typesInput)
    create?: typesCreateWithoutPokemon_typesInput;

    @Field(() => typesCreateOrConnectWithoutPokemon_typesInput, {nullable:true})
    @Type(() => typesCreateOrConnectWithoutPokemon_typesInput)
    connectOrCreate?: typesCreateOrConnectWithoutPokemon_typesInput;

    @Field(() => typesUpsertWithoutPokemon_typesInput, {nullable:true})
    @Type(() => typesUpsertWithoutPokemon_typesInput)
    upsert?: typesUpsertWithoutPokemon_typesInput;

    @Field(() => typesWhereUniqueInput, {nullable:true})
    @Type(() => typesWhereUniqueInput)
    connect?: typesWhereUniqueInput;

    @Field(() => typesUpdateWithoutPokemon_typesInput, {nullable:true})
    @Type(() => typesUpdateWithoutPokemon_typesInput)
    update?: typesUpdateWithoutPokemon_typesInput;
}
