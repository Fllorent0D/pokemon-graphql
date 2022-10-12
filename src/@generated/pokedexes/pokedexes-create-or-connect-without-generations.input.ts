import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { Type } from 'class-transformer';
import { pokedexesCreateWithoutGenerationsInput } from './pokedexes-create-without-generations.input';

@InputType()
export class pokedexesCreateOrConnectWithoutGenerationsInput {

    @Field(() => pokedexesWhereUniqueInput, {nullable:false})
    @Type(() => pokedexesWhereUniqueInput)
    where!: pokedexesWhereUniqueInput;

    @Field(() => pokedexesCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => pokedexesCreateWithoutGenerationsInput)
    create!: pokedexesCreateWithoutGenerationsInput;
}
