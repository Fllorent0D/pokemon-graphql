import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class nature_namesScalarWhereInput {

    @Field(() => [nature_namesScalarWhereInput], {nullable:true})
    AND?: Array<nature_namesScalarWhereInput>;

    @Field(() => [nature_namesScalarWhereInput], {nullable:true})
    OR?: Array<nature_namesScalarWhereInput>;

    @Field(() => [nature_namesScalarWhereInput], {nullable:true})
    NOT?: Array<nature_namesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    nature_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
