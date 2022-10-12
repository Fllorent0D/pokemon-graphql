import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokedex_proseWhereUniqueInput } from '../pokedex-prose/pokedex-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnepokedexProseArgs {

    @Field(() => pokedex_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokedex_proseWhereUniqueInput)
    where!: pokedex_proseWhereUniqueInput;
}
