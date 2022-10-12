import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { Type } from 'class-transformer';
import { pokedexesCreateWithoutRegionsInput } from './pokedexes-create-without-regions.input';

@InputType()
export class pokedexesCreateOrConnectWithoutRegionsInput {

    @Field(() => pokedexesWhereUniqueInput, {nullable:false})
    @Type(() => pokedexesWhereUniqueInput)
    where!: pokedexesWhereUniqueInput;

    @Field(() => pokedexesCreateWithoutRegionsInput, {nullable:false})
    @Type(() => pokedexesCreateWithoutRegionsInput)
    create!: pokedexesCreateWithoutRegionsInput;
}
