import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutMove_meta_ailment_namesInput } from './languages-create-without-move-meta-ailment-names.input';

@InputType()
export class languagesCreateOrConnectWithoutMove_meta_ailment_namesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutMove_meta_ailment_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutMove_meta_ailment_namesInput)
    create!: languagesCreateWithoutMove_meta_ailment_namesInput;
}
