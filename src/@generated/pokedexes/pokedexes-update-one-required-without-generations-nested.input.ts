import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesCreateWithoutGenerationsInput } from './pokedexes-create-without-generations.input';
import { Type } from 'class-transformer';
import { pokedexesCreateOrConnectWithoutGenerationsInput } from './pokedexes-create-or-connect-without-generations.input';
import { pokedexesUpsertWithoutGenerationsInput } from './pokedexes-upsert-without-generations.input';
import { pokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { pokedexesUpdateWithoutGenerationsInput } from './pokedexes-update-without-generations.input';

@InputType()
export class pokedexesUpdateOneRequiredWithoutGenerationsNestedInput {

    @Field(() => pokedexesCreateWithoutGenerationsInput, {nullable:true})
    @Type(() => pokedexesCreateWithoutGenerationsInput)
    create?: pokedexesCreateWithoutGenerationsInput;

    @Field(() => pokedexesCreateOrConnectWithoutGenerationsInput, {nullable:true})
    @Type(() => pokedexesCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: pokedexesCreateOrConnectWithoutGenerationsInput;

    @Field(() => pokedexesUpsertWithoutGenerationsInput, {nullable:true})
    @Type(() => pokedexesUpsertWithoutGenerationsInput)
    upsert?: pokedexesUpsertWithoutGenerationsInput;

    @Field(() => pokedexesWhereUniqueInput, {nullable:true})
    @Type(() => pokedexesWhereUniqueInput)
    connect?: pokedexesWhereUniqueInput;

    @Field(() => pokedexesUpdateWithoutGenerationsInput, {nullable:true})
    @Type(() => pokedexesUpdateWithoutGenerationsInput)
    update?: pokedexesUpdateWithoutGenerationsInput;
}
