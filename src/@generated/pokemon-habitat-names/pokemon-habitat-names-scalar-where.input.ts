import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class pokemon_habitat_namesScalarWhereInput {

    @Field(() => [pokemon_habitat_namesScalarWhereInput], {nullable:true})
    AND?: Array<pokemon_habitat_namesScalarWhereInput>;

    @Field(() => [pokemon_habitat_namesScalarWhereInput], {nullable:true})
    OR?: Array<pokemon_habitat_namesScalarWhereInput>;

    @Field(() => [pokemon_habitat_namesScalarWhereInput], {nullable:true})
    NOT?: Array<pokemon_habitat_namesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_habitat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
