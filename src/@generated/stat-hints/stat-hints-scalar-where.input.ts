import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class stat_hintsScalarWhereInput {

    @Field(() => [stat_hintsScalarWhereInput], {nullable:true})
    AND?: Array<stat_hintsScalarWhereInput>;

    @Field(() => [stat_hintsScalarWhereInput], {nullable:true})
    OR?: Array<stat_hintsScalarWhereInput>;

    @Field(() => [stat_hintsScalarWhereInput], {nullable:true})
    NOT?: Array<stat_hintsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    gene_mod_5?: IntFilter;
}
