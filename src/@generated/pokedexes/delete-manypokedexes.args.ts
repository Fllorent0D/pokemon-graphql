import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokedexesWhereInput } from './pokedexes-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokedexesArgs {

    @Field(() => pokedexesWhereInput, {nullable:true})
    @Type(() => pokedexesWhereInput)
    where?: pokedexesWhereInput;
}
