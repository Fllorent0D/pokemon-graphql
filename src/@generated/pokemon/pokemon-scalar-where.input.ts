import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class pokemonScalarWhereInput {

    @Field(() => [pokemonScalarWhereInput], {nullable:true})
    AND?: Array<pokemonScalarWhereInput>;

    @Field(() => [pokemonScalarWhereInput], {nullable:true})
    OR?: Array<pokemonScalarWhereInput>;

    @Field(() => [pokemonScalarWhereInput], {nullable:true})
    NOT?: Array<pokemonScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    species_id?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    height?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    weight?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    base_experience?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_default?: BoolFilter;
}
