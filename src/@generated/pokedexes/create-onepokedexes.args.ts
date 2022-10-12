import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokedexesCreateInput } from './pokedexes-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokedexesArgs {

    @Field(() => pokedexesCreateInput, {nullable:false})
    @Type(() => pokedexesCreateInput)
    data!: pokedexesCreateInput;
}
