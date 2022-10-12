import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokedex_proseWhereInput } from '../pokedex-prose/pokedex-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokedexProseArgs {

    @Field(() => pokedex_proseWhereInput, {nullable:true})
    @Type(() => pokedex_proseWhereInput)
    where?: pokedex_proseWhereInput;
}
