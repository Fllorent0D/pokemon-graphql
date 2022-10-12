import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutMove_meta_ailment_namesInput } from './languages-create-without-move-meta-ailment-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutMove_meta_ailment_namesInput } from './languages-create-or-connect-without-move-meta-ailment-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutMove_meta_ailment_namesInput {

    @Field(() => languagesCreateWithoutMove_meta_ailment_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutMove_meta_ailment_namesInput)
    create?: languagesCreateWithoutMove_meta_ailment_namesInput;

    @Field(() => languagesCreateOrConnectWithoutMove_meta_ailment_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutMove_meta_ailment_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutMove_meta_ailment_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
