import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Pokemon_move_method_proseListRelationFilter } from '../prisma/pokemon-move-method-prose-list-relation-filter.input';

@InputType()
export class pokemon_move_methodsWhereInput {

    @Field(() => [pokemon_move_methodsWhereInput], {nullable:true})
    AND?: Array<pokemon_move_methodsWhereInput>;

    @Field(() => [pokemon_move_methodsWhereInput], {nullable:true})
    OR?: Array<pokemon_move_methodsWhereInput>;

    @Field(() => [pokemon_move_methodsWhereInput], {nullable:true})
    NOT?: Array<pokemon_move_methodsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => Pokemon_move_method_proseListRelationFilter, {nullable:true})
    pokemon_move_method_prose?: Pokemon_move_method_proseListRelationFilter;
}
