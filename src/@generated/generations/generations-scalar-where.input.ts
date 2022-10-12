import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class generationsScalarWhereInput {

    @Field(() => [generationsScalarWhereInput], {nullable:true})
    AND?: Array<generationsScalarWhereInput>;

    @Field(() => [generationsScalarWhereInput], {nullable:true})
    OR?: Array<generationsScalarWhereInput>;

    @Field(() => [generationsScalarWhereInput], {nullable:true})
    NOT?: Array<generationsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    main_region_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    canonical_pokedex_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;
}
