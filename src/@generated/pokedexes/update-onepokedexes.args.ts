import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokedexesUpdateInput } from './pokedexes-update.input';
import { Type } from 'class-transformer';
import { pokedexesWhereUniqueInput } from './pokedexes-where-unique.input';

@ArgsType()
export class UpdateOnepokedexesArgs {

    @Field(() => pokedexesUpdateInput, {nullable:false})
    @Type(() => pokedexesUpdateInput)
    data!: pokedexesUpdateInput;

    @Field(() => pokedexesWhereUniqueInput, {nullable:false})
    @Type(() => pokedexesWhereUniqueInput)
    where!: pokedexesWhereUniqueInput;
}
