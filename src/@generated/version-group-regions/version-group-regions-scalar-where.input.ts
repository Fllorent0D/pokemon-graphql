import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class version_group_regionsScalarWhereInput {

    @Field(() => [version_group_regionsScalarWhereInput], {nullable:true})
    AND?: Array<version_group_regionsScalarWhereInput>;

    @Field(() => [version_group_regionsScalarWhereInput], {nullable:true})
    OR?: Array<version_group_regionsScalarWhereInput>;

    @Field(() => [version_group_regionsScalarWhereInput], {nullable:true})
    NOT?: Array<version_group_regionsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    region_id?: IntFilter;
}
