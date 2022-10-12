import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { Type } from 'class-transformer';
import { pokedexesUpdateWithoutRegionsInput } from './pokedexes-update-without-regions.input';
import { pokedexesCreateWithoutRegionsInput } from './pokedexes-create-without-regions.input';

@InputType()
export class pokedexesUpsertWithWhereUniqueWithoutRegionsInput {

    @Field(() => pokedexesWhereUniqueInput, {nullable:false})
    @Type(() => pokedexesWhereUniqueInput)
    where!: pokedexesWhereUniqueInput;

    @Field(() => pokedexesUpdateWithoutRegionsInput, {nullable:false})
    @Type(() => pokedexesUpdateWithoutRegionsInput)
    update!: pokedexesUpdateWithoutRegionsInput;

    @Field(() => pokedexesCreateWithoutRegionsInput, {nullable:false})
    @Type(() => pokedexesCreateWithoutRegionsInput)
    create!: pokedexesCreateWithoutRegionsInput;
}
