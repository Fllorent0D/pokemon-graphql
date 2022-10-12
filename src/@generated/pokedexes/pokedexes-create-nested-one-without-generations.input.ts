import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesCreateWithoutGenerationsInput } from './pokedexes-create-without-generations.input';
import { Type } from 'class-transformer';
import { pokedexesCreateOrConnectWithoutGenerationsInput } from './pokedexes-create-or-connect-without-generations.input';
import { pokedexesWhereUniqueInput } from './pokedexes-where-unique.input';

@InputType()
export class pokedexesCreateNestedOneWithoutGenerationsInput {

    @Field(() => pokedexesCreateWithoutGenerationsInput, {nullable:true})
    @Type(() => pokedexesCreateWithoutGenerationsInput)
    create?: pokedexesCreateWithoutGenerationsInput;

    @Field(() => pokedexesCreateOrConnectWithoutGenerationsInput, {nullable:true})
    @Type(() => pokedexesCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: pokedexesCreateOrConnectWithoutGenerationsInput;

    @Field(() => pokedexesWhereUniqueInput, {nullable:true})
    @Type(() => pokedexesWhereUniqueInput)
    connect?: pokedexesWhereUniqueInput;
}
