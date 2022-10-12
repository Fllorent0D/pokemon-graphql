import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { Type } from 'class-transformer';
import { pokedexesCreateInput } from './pokedexes-create.input';
import { pokedexesUpdateInput } from './pokedexes-update.input';

@ArgsType()
export class UpsertOnepokedexesArgs {

    @Field(() => pokedexesWhereUniqueInput, {nullable:false})
    @Type(() => pokedexesWhereUniqueInput)
    where!: pokedexesWhereUniqueInput;

    @Field(() => pokedexesCreateInput, {nullable:false})
    @Type(() => pokedexesCreateInput)
    create!: pokedexesCreateInput;

    @Field(() => pokedexesUpdateInput, {nullable:false})
    @Type(() => pokedexesUpdateInput)
    update!: pokedexesUpdateInput;
}
