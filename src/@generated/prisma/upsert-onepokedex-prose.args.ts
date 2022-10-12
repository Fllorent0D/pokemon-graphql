import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokedex_proseWhereUniqueInput } from '../pokedex-prose/pokedex-prose-where-unique.input';
import { Type } from 'class-transformer';
import { pokedex_proseCreateInput } from '../pokedex-prose/pokedex-prose-create.input';
import { pokedex_proseUpdateInput } from '../pokedex-prose/pokedex-prose-update.input';

@ArgsType()
export class UpsertOnepokedexProseArgs {

    @Field(() => pokedex_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokedex_proseWhereUniqueInput)
    where!: pokedex_proseWhereUniqueInput;

    @Field(() => pokedex_proseCreateInput, {nullable:false})
    @Type(() => pokedex_proseCreateInput)
    create!: pokedex_proseCreateInput;

    @Field(() => pokedex_proseUpdateInput, {nullable:false})
    @Type(() => pokedex_proseUpdateInput)
    update!: pokedex_proseUpdateInput;
}
