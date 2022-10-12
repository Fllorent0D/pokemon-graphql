import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnepokedexesArgs {

    @Field(() => pokedexesWhereUniqueInput, {nullable:false})
    @Type(() => pokedexesWhereUniqueInput)
    where!: pokedexesWhereUniqueInput;
}
