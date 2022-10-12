import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class versionsScalarWhereInput {

    @Field(() => [versionsScalarWhereInput], {nullable:true})
    AND?: Array<versionsScalarWhereInput>;

    @Field(() => [versionsScalarWhereInput], {nullable:true})
    OR?: Array<versionsScalarWhereInput>;

    @Field(() => [versionsScalarWhereInput], {nullable:true})
    NOT?: Array<versionsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;
}
