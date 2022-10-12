import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokedex_proseUpdateInput } from '../pokedex-prose/pokedex-prose-update.input';
import { Type } from 'class-transformer';
import { pokedex_proseWhereUniqueInput } from '../pokedex-prose/pokedex-prose-where-unique.input';

@ArgsType()
export class UpdateOnepokedexProseArgs {

    @Field(() => pokedex_proseUpdateInput, {nullable:false})
    @Type(() => pokedex_proseUpdateInput)
    data!: pokedex_proseUpdateInput;

    @Field(() => pokedex_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokedex_proseWhereUniqueInput)
    where!: pokedex_proseWhereUniqueInput;
}
