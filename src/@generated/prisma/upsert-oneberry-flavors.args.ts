import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_flavorsWhereUniqueInput } from '../berry-flavors/berry-flavors-where-unique.input';
import { Type } from 'class-transformer';
import { berry_flavorsCreateInput } from '../berry-flavors/berry-flavors-create.input';
import { berry_flavorsUpdateInput } from '../berry-flavors/berry-flavors-update.input';

@ArgsType()
export class UpsertOneberryFlavorsArgs {

    @Field(() => berry_flavorsWhereUniqueInput, {nullable:false})
    @Type(() => berry_flavorsWhereUniqueInput)
    where!: berry_flavorsWhereUniqueInput;

    @Field(() => berry_flavorsCreateInput, {nullable:false})
    @Type(() => berry_flavorsCreateInput)
    create!: berry_flavorsCreateInput;

    @Field(() => berry_flavorsUpdateInput, {nullable:false})
    @Type(() => berry_flavorsUpdateInput)
    update!: berry_flavorsUpdateInput;
}
