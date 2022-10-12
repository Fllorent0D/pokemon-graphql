import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { locationsUpdateInput } from './locations-update.input';
import { Type } from 'class-transformer';
import { locationsWhereUniqueInput } from './locations-where-unique.input';

@ArgsType()
export class UpdateOnelocationsArgs {

    @Field(() => locationsUpdateInput, {nullable:false})
    @Type(() => locationsUpdateInput)
    data!: locationsUpdateInput;

    @Field(() => locationsWhereUniqueInput, {nullable:false})
    @Type(() => locationsWhereUniqueInput)
    where!: locationsWhereUniqueInput;
}
