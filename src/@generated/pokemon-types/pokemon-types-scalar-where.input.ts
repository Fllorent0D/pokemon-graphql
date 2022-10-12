import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class pokemon_typesScalarWhereInput {

    @Field(() => [pokemon_typesScalarWhereInput], {nullable:true})
    AND?: Array<pokemon_typesScalarWhereInput>;

    @Field(() => [pokemon_typesScalarWhereInput], {nullable:true})
    OR?: Array<pokemon_typesScalarWhereInput>;

    @Field(() => [pokemon_typesScalarWhereInput], {nullable:true})
    NOT?: Array<pokemon_typesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    slot?: IntFilter;
}
