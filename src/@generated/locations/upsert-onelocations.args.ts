import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { locationsWhereUniqueInput } from './locations-where-unique.input';
import { Type } from 'class-transformer';
import { locationsCreateInput } from './locations-create.input';
import { locationsUpdateInput } from './locations-update.input';

@ArgsType()
export class UpsertOnelocationsArgs {

    @Field(() => locationsWhereUniqueInput, {nullable:false})
    @Type(() => locationsWhereUniqueInput)
    where!: locationsWhereUniqueInput;

    @Field(() => locationsCreateInput, {nullable:false})
    @Type(() => locationsCreateInput)
    create!: locationsCreateInput;

    @Field(() => locationsUpdateInput, {nullable:false})
    @Type(() => locationsUpdateInput)
    update!: locationsUpdateInput;
}
