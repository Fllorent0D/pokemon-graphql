import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class version_namesScalarWhereInput {

    @Field(() => [version_namesScalarWhereInput], {nullable:true})
    AND?: Array<version_namesScalarWhereInput>;

    @Field(() => [version_namesScalarWhereInput], {nullable:true})
    OR?: Array<version_namesScalarWhereInput>;

    @Field(() => [version_namesScalarWhereInput], {nullable:true})
    NOT?: Array<version_namesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    version_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
